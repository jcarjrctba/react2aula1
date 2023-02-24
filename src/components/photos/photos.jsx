import React from "react";
import * as S from "./styles";
import { useEffect } from "react";
import { useState } from "react";
import { fetcher } from "../../services/index";
import { Text } from "../../ui/text";
import { Loading } from "../../ui/loading";
import { InstaContext } from "../../App";

export const Photos = () => {
  const state = React.useContext(InstaContext);
  console.log(state.meuState);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher("photos");
        state.meuDispatch({ type: "add_photos_user", payload: response });
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    makeRequest();
  }, []);

  console.log(...state.meuState.user.photos);

  const handleImageClick = (imageId) => {
    state.meuDispatch({ type: "add_highlight_image", payload: imageId });
    state.meuDispatch({ type: "change_current_page", payload: "feedphoto" });
  };

  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      {hasError && <Text>Erro de carregamento</Text>}
      {state.meuState.user.photos.map((photo) => (
        <S.PhotoItem key={photo.id} onClick={() => handleImageClick(photo?.id)}>
          <S.Photo src={photo.urls.small} />
        </S.PhotoItem>
      ))}
    </S.Wrapper>
  );
};
