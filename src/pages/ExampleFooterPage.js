import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExampleFooterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-full flex-col flex items-center">
      <h2 className="my-10 text-4xl font-semibold">O nas</h2>
      <p className="text-2xl text-center px-20">
        TripTrackers to platforma stworzona dla pasjonatów podróży, gdzie możesz
        dzielić się swoimi opiniami i ocenami na temat odwiedzanych miast. Nasza
        społeczność skupia entuzjastów podróży z całego świata, którzy chcą
        dzielić się swoimi doświadczeniami, pomagać innym podróżnym w wyborze
        miejsc do odwiedzenia i tworzyć społeczność pełną cennych wskazówek i
        inspiracji podróżniczych. Niezależnie od tego, czy chcesz polecić ukrytą
        restaurację w ulubionym mieście, podzielić się wrażeniami z wędrówki po
        górach czy po prostu przeczytać opinie innych podróżnych, TripTrackers
        to miejsce, gdzie Twoje doświadczenia nabierają życia. Dołącz do nas już
        dziś i zacznij dzielić się swoimi podróżniczymi przygodami!
      </p>

      <h2 className="mt-20 text-4xl font-semibold text-center">Kontakt</h2>
      <p className="text-2xl text-center px-20 my-10 ">
        Telefon: 534-534-534 <br/>Email: mateusz039@op.pl 
      </p>
      <h2 className="mt-10 text-4xl font-semibold text-center">Regulamin serwisu TripTrackers:</h2>
      <p className="text-2xl text-center px-20 mt-10 mb-20" style={{ lineHeight: '2' }}>
      1.Rejestrując się na naszej platformie, zgadzasz się przestrzegać zasad określonych w regulaminie.<br/>
      2.Zabrania się publikowania treści wulgarnych, obraźliwych, groźnych, zawierających dyskryminację, nienawiść lub przemoc.<br/>
      3.Każdy użytkownik ponosi odpowiedzialność za treści, które publikuje na platformie TripTrackers.<br/>
      4.Zastrzegamy sobie prawo do usuwania treści naruszających regulamin oraz do blokowania użytkowników, którzy nie przestrzegają zasad.<br/>
      5.Korzystając z TripTrackers, zgadzasz się na przetwarzanie swoich danych osobowych zgodnie z naszą polityką prywatności.
      </p>
    </div>
  );
};

export default ExampleFooterPage;
