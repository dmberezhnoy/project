import React, {useState} from 'react';

import {classNames} from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface ISidebarProps {
    className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
            <button onClick={() => setIsCollapsed(prev => !prev)}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};