import React from "react"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"

import SearchWrapper from './search.styled'

const Search = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        navigate(`/search?search=${data.search.replaceAll(' ', '_')}`)
    }
    return (
        <SearchWrapper onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Search' {...register("search", { required: true })}/>
            <button type="submit">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <use href="#search"/>
                </svg>
                <span className="visually-hidden">search</span>
            </button>
        </SearchWrapper>
    )
}

export default Search