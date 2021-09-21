/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
import React from 'react'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { ContactPage } from '../components/common/ContactPage'


const Contact = ({location}) => {

    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
					<h1>Contact Page</h1>
                    { ContactPage }
                </div>
            </Layout>
        </>
    )
}

export default Contact

