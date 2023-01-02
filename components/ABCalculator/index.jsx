import React, { useState } from 'react'
import GridItem from '../GridItem'
import {MainContainer, CalculatorItem, CalculatorRow, ValueInput, ResultItem, ResultTitle, ResultText} from './styles'
import confidence from 'ab-test-confidence';



const ABCalculator = () => {

    
    const [visitorsA, setVisitorsA] = useState(100);
    const [visitorsB, setVisitorsB] = useState(110);
    const [conversionsA, setConversionsA] = useState(80);
    const [conversionsB, setConversionsB] = useState(30);

    const calcZScore = () => {

        let a = {
            visitors: visitorsA,
            conversions: conversionsA
        }

        let b = {
            visitors: visitorsB,
            conversions: conversionsB
        }

        return ({
            pValue: confidence.pValue(confidence.zScore(a, b)),
            significant: confidence.at95percent(confidence.pValue(confidence.zScore(a, b))),
            zScore: confidence.zScore(a, b)
        });

    };

  return (
    
    <MainContainer>
        <CalculatorItem
            gridPosition={{
                desktop: {
                    columnStart: 3,
                    columnEnd: 8,
                },
                tablet: {
                    columnStart: 1,
                    columnEnd: 10
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
        >
            <CalculatorRow>
                <div className='letter'></div>
                <div className='values'>Number of visitors</div>
                <div className='values'>Overall conversions</div>
                <div className='conversion-rate'>Conversion rate</div>
            </CalculatorRow>
            <CalculatorRow className={confidence.conversionRate(visitorsA, conversionsA) > confidence.conversionRate(visitorsB, conversionsB) ? 'conversionWinner' : '' }>
                <div className='letter'>A</div>
                <div className='values'>
                    <ValueInput 
                        className={confidence.conversionRate(visitorsA, conversionsA) > confidence.conversionRate(visitorsB, conversionsB) ? 'conversionWinner' : '' }
                        type="number"
                        value={visitorsA}
                        onChange={e => {
                            setVisitorsA(e.target.value);
                        }}
                    />
                </div>
                <div className='values'>
                    <ValueInput 
                        className={confidence.conversionRate(visitorsA, conversionsA) > confidence.conversionRate(visitorsB, conversionsB) ? 'conversionWinner' : '' }
                        type="number"
                        value={conversionsA}
                        onChange={e => {
                            setConversionsA(e.target.value);
                        }}

                    />
                </div>
                <div className='conversion-rate'>{Number.isFinite(confidence.conversionRate(visitorsA, conversionsA)) ? Math.round(confidence.conversionRate(visitorsA, conversionsA) * 100) : 0}%</div>
            </CalculatorRow>
            <CalculatorRow className={confidence.conversionRate(visitorsB, conversionsB) > confidence.conversionRate(visitorsA, conversionsA) ? 'conversionWinner' : '' }>
                <div className='letter'>B</div>
                <div className='values'>
                    <ValueInput 
                        className={confidence.conversionRate(visitorsB, conversionsB) > confidence.conversionRate(visitorsA, conversionsA) ? 'conversionWinner' : '' }
                        type="number"
                        value={visitorsB}
                        onChange={e => {
                            setVisitorsB(e.target.value);
                        }}
                    />
                </div>
                <div className='values'>
                    <ValueInput 
                        className={confidence.conversionRate(visitorsB, conversionsB) > confidence.conversionRate(visitorsA, conversionsA) ? 'conversionWinner' : '' }
                        type="number"
                        value={conversionsB}
                        onChange={e => {
                            setConversionsB(e.target.value);
                        }}
                    />                    
                </div>
                <div className='conversion-rate'>{Number.isFinite(confidence.conversionRate(visitorsB, conversionsB)) ? Math.round(confidence.conversionRate(visitorsB, conversionsB) * 100) : 0}%</div>
            </CalculatorRow>
        </CalculatorItem>
        <ResultItem
            gridPosition={{
                desktop: {
                    columnStart: 9,
                    columnEnd: 12,
                },
                tablet: {
                    columnStart: 1,
                    columnEnd: 10
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
        >
            <ResultTitle>Your test results</ResultTitle>
            <ResultText>Test { confidence.conversionRate(visitorsA, conversionsA) > confidence.conversionRate(visitorsB, conversionsB) ? 'A' : 'B' } converted <b>{ Math.round(Math.abs((Math.max(conversionsA, conversionsB) - Math.min(conversionsA, conversionsB)) / Math.min(conversionsA, conversionsB)) * 100) }% better</b> than test { confidence.conversionRate(visitorsA, conversionsA) > confidence.conversionRate(visitorsB, conversionsB) ? 'B' : 'A' }.</ResultText>
            <ResultText>You can be <b>{ calcZScore().pValue > 0.5 ? Math.abs(Math.round(calcZScore().pValue * 100)) : Math.abs(Math.round((1 - calcZScore().pValue) * 100)) }% certain</b> that the changes in test { confidence.conversionRate(visitorsA, conversionsA) > confidence.conversionRate(visitorsB, conversionsB) ? 'A' : 'B' } will improve your conversion rates.</ResultText>
            { calcZScore().significant ? 
                <ResultText>
                    <span role="img" aria-labelledby="success-message">🎉 </span>
                    <span id="success-message">
                        Your test is statistically significant! 
                    </span>
                </ResultText> : 
                <ResultText>
                    <span role="img" aria-labelledby="no-success-message">😩 </span>
                    <span id="no-success-message">
                        Your test is not statistically significant 
                    </span>
                </ResultText>
            }
        </ResultItem>  
    </MainContainer>
  )
}

export default ABCalculator