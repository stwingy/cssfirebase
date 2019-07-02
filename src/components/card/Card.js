import React from 'react';
import './Card.css';
const Card = () => {
	return <div className ="card_holder" >
     <div className="card">
                                   <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>3 day tours</li>
                                                <li>Up to 30 people</li>
                                                <li>2 tour guides</li>
                                                <li>Sleep in cozy hotels</li>
                                                <li>Difficulty: easy</li>
                                            </ul>
                                        </div>
                                   </div>
                                   <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">$297</p>
                                            </div>
                                            <button className ="btn btn-sign">BOOK</button>
                                        </div>
                                    </div>
    </div>
    
    </div>
};
export default Card;
