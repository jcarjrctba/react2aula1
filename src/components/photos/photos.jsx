import React from "react";
import * as S from "./styles";
import { useEffect } from "react";
import { useState } from "react";
import { fetcher } from "../../services/index";
import { Text } from "../../ui/text";
import { Loading } from "../../ui/loading";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher("photos");
        setPhotos(response);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    makeRequest();
  }, []);

  console.log(photos);

  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      {hasError && <Text>Erro de carregamento</Text>}
      {photos.map((photo) => (
        <S.PhotoItem key={photo.id}>
          <S.Photo src={photo.urls.small} />
        </S.PhotoItem>
      ))}
    </S.Wrapper>
  );
};
