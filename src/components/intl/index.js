import React from "react"
import { IntlProvider } from 'react-intl'
import en from '../../intl/en.json'
import fr from '../../intl/fr.json'
import de from '../../intl/de.json'
import es from '../../intl/es.json'

const messages = { en, fr, de, es }

const Intl = ({
    children,
    lang
}) => (
    <IntlProvider locale={lang}
            defaultLocale="en"
            messages={messages[lang] || messages.en}>
        {children}
    </IntlProvider>
)

export default Intl