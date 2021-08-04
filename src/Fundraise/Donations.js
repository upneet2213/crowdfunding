import React from 'react'

const Donations = () => {
    return (
        <div className="donations">
            <div className="donations-header">
                <div className="figures">
                    <h4 >$89,914</h4>
                    <p >of $100,000 backed</p>
                </div>
                <div className="figures">
                    <h4 >$5,007</h4>
                    <p >total backers</p>
                </div>
                <div className="figures">
                    <h4 >56</h4>
                    <p >days left</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-complete"></div>
            </div>
        </div>
    )
}

export default Donations
