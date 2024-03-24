import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExampleFooterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-full flex-col flex items-center">
      <h2 className="my-10 text-4xl font-semibold">{t("footer.aboutUs")}</h2>
      <p className="text-2xl text-center px-20">{t("footer.aboutUsText")}</p>

      <h2 className="mt-20 text-4xl font-semibold text-center">
        {t("footer.contact")}
      </h2>
      <p className="text-2xl text-center px-20 my-10 ">
        {t("footer.phoneNumber")}: 534-534-534 <br />
        Email: mateusz039@op.pl
      </p>
      <h2 className="mt-10 text-4xl font-semibold text-center">
        {t("footer.regulations")}
      </h2>
      <p
        className="text-2xl text-center px-20 mt-10 mb-20"
        style={{ lineHeight: "2" }}
      >
        {t("footer.regulationsText1")}
        <br />
        {t("footer.regulationsText2")}
        <br />
        {t("footer.regulationsText3")}
        <br />
        {t("footer.regulationsText4")}
        <br />
        {t("footer.regulationsText5")}
      </p>
    </div>
  );
};

export default ExampleFooterPage;
