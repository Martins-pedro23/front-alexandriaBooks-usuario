"use client";

import {
    useContext,
    createContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";

interface IProps {
    children: JSX.Element;
}

interface IContext {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

const isBrowser = typeof window !== "undefined";

const ThemeContext = createContext({} as IContext);

export const ThemeContextProvider = ({ children }: IProps) => {
    const [theme, setTheme] = useState<"dark" | "light">(
        (isBrowser && (localStorage.getItem("theme") as "dark")) || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        const remove = theme === "dark" ? "light" : "dark";

        root.classList.remove(remove);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
