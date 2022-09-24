import React from 'react';

import {classNames} from "shared/lib/classNames/classNames";

import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const handleToggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button onClick={handleToggleLanguage} theme={ThemeButton.CLEAR}>{t("Язык")}</Button>
        </div>
    );
};