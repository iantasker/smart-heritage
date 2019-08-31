import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import isEmpty from 'lodash/isEmpty'

const Narrative = ({ narrative, event, handleClear, handleChangeEvent }) => (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col'>
                <button type="button" className="btn btn-outline-primary btn-sm float-right" onClick={handleClear}>Back</button>
                <h4>{event.name}</h4>
                <ReactMarkdown source={event.content} escapeHtml={false} />
            </div>
        </div>
        {!isEmpty(event.next_events) && <div className='row my-4'>
            <div className='col'>
                <table>
                    <tbody>
                        {event.next_events.map((nextEvent) => (
                            <tr key={`next-evt-${nextEvent.id}`}>
                                <td className='text-center'><img src={nextEvent.icon_url} className="event-icon" /></td>
                                <td><a onClick={() => { handleChangeEvent(nextEvent.id) }}>{nextEvent.name}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>}
        <div className='row my-4'>
            <div className='col'>
                <table>
                    <tbody className='font-weight-lighter'>
                        <tr>
                            <td className='text-right'>{narrative.name != event.name && 'Part of'}</td>
                            <td className='font-weight-normal'>{narrative.name}</td>
                        </tr>
                        <tr>
                            <td className='text-right'>By</td>
                            <td><a href={narrative.author_href}>{narrative.author}</a></td>
                        </tr>
                        {narrative.author_bio &&
                            <tr>
                                <td></td>
                                <td><ReactMarkdown source={narrative.author_bio} escapeHtml={false} /></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

export default Narrative
