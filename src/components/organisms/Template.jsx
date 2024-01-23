import React from 'react'
import Header from '../molecules/Header/Header'
import PageHeader from '../molecules/PageHeader/PageHeader'
import Nav from '../molecules/Nav/Nav'

export default function Template(props) {
    return (
        <>
            <Header />
            <PageHeader title={props.pageTitle} buttonText={props.buttonText}/>
            {props.pageBody}
            <Nav active={props.active}/>
        </>
    )
}
