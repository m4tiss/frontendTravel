import { React } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterAndLoginButtons = (props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
      <Link to="/Registration">
        <button
          onClick={props.onClick}
          className="bg-white w-40 h-10 font-semibold text-blue-400  border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300"
        >
          {t("navbar.register")}
        </button>
      </Link>
      <Link to="/Login">
        <button
          onClick={props.onClick}
          className="bg-white w-40 h-10 font-semibold text-blue-400 border-2 border-blue-400 rounded-md mx-2 hover:bg-slate-300"
        >
          {t("navbar.logIn")}
        </button>
      </Link>
    </div>
  );
};

export default RegisterAndLoginButtons;
