import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import isEmpty from 'lodash/isEmpty'

const Narrative = ({ narrative, event, handleBack, handleChangeEvent }) => (
    <div className='container container-small'>
        <div className='row justify-content-end my-2'>
            <div className='col'>
                <button type='button' className='btn btn-outline-primary btn-sm' style={{ width: '100%' }} onClick={handleBack}>Back</button>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <h2>{event.name}</h2>
                <ReactMarkdown source={event.content} escapeHtml={false} />
            </div>
        </div>
        {!isEmpty(event.next_events) && <div className='row my-4'>
            <div className='col'>
                <table>
                    <tbody>
                        {event.next_events.map((nextEvent) => (
                            <tr key={`next-evt-${nextEvent.id}`}>
                                <td className='text-center'><img src={nextEvent.icon_url} className='event-icon mr-2' /></td>
                                <td><a href='#' onClick={(evt) => {
                                    handleChangeEvent(nextEvent.id)
                                    evt.preventDefault()
                                }}>{nextEvent.name}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>}
        <div className='row'>
            <div className='col'>
                <hr />
                <div>{narrative.name}</div>
                <div className='font-weight-lighter'>By <a href={narrative.author_href}>{narrative.author}</a></div>
                {narrative.author_bio && <ReactMarkdown source={narrative.author_bio} escapeHtml={false} />}
            </div>
        </div>
        <div className='row justify-content-end my-2'>
            <div className='col'>
                <button type='button' className='btn btn-outline-primary btn-sm' style={{ width: '100%' }} onClick={handleBack}>Back</button>
            </div>
        </div>
    </div>
)

export default Narrative
