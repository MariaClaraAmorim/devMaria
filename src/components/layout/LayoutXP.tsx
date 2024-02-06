import React, { useState, useEffect } from "react";
import LoadingComponent from "../loadingXP/LoadingComponent";
import RenderAfterLoad from "../loadingXP/RenderAfterLoad";
import MainComponent from "../loadingXP/MainComponent";

const LayoutXP: React.FC = () => {
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);

  // Simulando um tempo de carregamento usando useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading1(false);
    }, 4000); // Tempo de espera simulado de 4 segundos para o primeiro loading

    setTimeout(() => {
      setIsLoading2(false);
    }, 2000); // Tempo de espera simulado de 4 segundos para o segundo loading
  }, []);

  return (
    <div>
      {isLoading1 ? (
        <LoadingComponent />
      ) : isLoading2 ? (
        <RenderAfterLoad />
      ) : (
        <MainComponent />
      )}
    </div>
  );
};

export default LayoutXP;
