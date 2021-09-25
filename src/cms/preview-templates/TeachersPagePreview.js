import React from 'react'
import PropTypes from 'prop-types'
import { TeachersPageTemplate } from '../../templates/teachers-page'

const TeachersPagePreview = ({ entry, widgetFor, getAsset }) => (
    <TeachersPageTemplate
        title={entry.getIn(['data', 'title'])}
        image={getAsset(entry.getIn(['data', 'image']))}
        content={widgetFor('body')}
    />
)

TeachersPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default TeachersPagePreview
