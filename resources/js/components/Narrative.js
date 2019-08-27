import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const Narrative = ({ narrative, event, handleClear }) => (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col'>
                <button type="button" className="btn btn-outline-primary btn-sm float-right" onClick={handleClear}>Back</button>
                <h4>{event.name}</h4>
                <ReactMarkdown source={event.content} escapeHtml={false} />
            </div>
        </div>
        <div className='row my-4'>
            <div className='col'>
                <table>
                    <tbody className='font-weight-lighter'>
                        <tr>
                            <td className='text-right'>Part of</td>
                            <td className='font-weight-normal'>{narrative.name}</td>
                        </tr>
                        <tr>
                            <td className='text-right'>By</td>
                            <td><a href={narrative.author_href}>{narrative.author}</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{narrative.summary && <ReactMarkdown source={narrative.summary} escapeHtml={false} />}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

export default Narrative
