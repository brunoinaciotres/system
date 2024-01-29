import React from 'react'
import Header from '../molecules/Header/Header'
import PageHeader from '../molecules/PageHeader/PageHeader'
import Nav from '../molecules/Nav/Nav'
import Modal from '../molecules/Modal/Modal'

export default function Template(props) {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    const handleCloseModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

  

    return (
        <>
            <Header />
            <PageHeader 
                handleCloseModal = {handleCloseModal} 
                modalIsOpen = {modalIsOpen} 
                title={props.pageTitle} 
                buttonText={props.buttonText} 
            />
            <div class="top-reminder bold bg-blue-gradient">
                Início de mês
            </div>
            {props.pageBody}
            <Modal handleCloseModal = {handleCloseModal} modalIsOpen = {modalIsOpen}/>
            <Nav active={props.active} />

        </>
    )
}
