import React from "react"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"

import SearchWrapper from './search.styled'
import { FormattedMessage, useIntl } from "react-intl"

const Search = ({ lang, type }) => {
    const { register, handleSubmit } = useForm();
    const intl = useIntl()
    const langStr = lang !== 'en' ? '/' + lang : ''
    const onSubmit = (data) => {
        navigate(`${langStr}/search?q=${data.search.replaceAll(' ', '_')}&type=${type}`)
    }
    return (
        <SearchWrapper onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={intl.formatMessage({id: 'global.search'})} {...register("search", { required: true })}/>
            <button type="submit">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <use href="#search"/>
                </svg>
                <span className="visually-hidden">
                    <FormattedMessage id="global.search"/>
                </span>
            </button>
        </SearchWrapper>
    )
}

export default Search