import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

import enFlag from "@images/en.jpg"
import deFlag from "@images/de.jpg"

import { LangSwitcherDropdown, LangSwitcherWrapper } from "./langSwitcher.styled"

const languages = {
    en: { flag: enFlag },
    de: { flag: deFlag }
}

const getCurrentLanguage = (pathname) => {
    const match = pathname.match(/^\/(de|fr|es)(\/|$)/)
    return match ? match[1] : "en"
}

const LanguageSwitcher = () => {
    const { pathname } = useLocation()
    const currentLang = getCurrentLanguage(pathname)
    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = (langCode) => {
        const pathWithoutLang = pathname.replace(/^\/(de|fr|es)(?=\/|$)/, "").replace(/\/+$/, "")
        const newPath = langCode === "en" ? pathWithoutLang || "/" : `/${langCode}${pathWithoutLang || "/"}`
        navigate(newPath)
    }

    return (
        <LangSwitcherWrapper className="language-switcher">
            <button onClick={() => setShowDropdown(!showDropdown)}>
                <img src={languages[currentLang].flag} alt={currentLang} />
            </button>
            {showDropdown && (
                <LangSwitcherDropdown className="dropdown">
                    {Object.entries(languages).map(([code, { flag }]) => {
                        if (code !== currentLang) return (
                            <li key={code}>
                                <button onClick={() => handleClick(code)}>
                                    <img src={flag} alt={code} />
                                </button>
                            </li>
                        )
                    })}
                </LangSwitcherDropdown>
            )}
        </LangSwitcherWrapper>
    )
}

export default LanguageSwitcher
