/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import SkillsPage from '../components/common/SkillsPage'

const Skills = ({ location }) => {
    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <SkillsPage />
                </div>
            </Layout>
        </>
    )
}

Skills.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Skills

