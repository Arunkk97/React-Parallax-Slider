import React from 'react'
import { Button, Card } from 'react-bootstrap'


function CardImg() {
    return (
        <>

            <div className='row d-flex justify-content-around align-items-center mb-5 '>


                <Card className='m-2' style={{ width: '22rem' }}>

                    <Card.Body>
                        <Card.Text className='fw-bolder'>
                        Acko Drive Awards 2023 – Compact Car of the Year
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Card className='m-2' style={{ width: '22rem' }}>

                    <Card.Body>
                        <Card.Text  className='fw-bolder'>
                        Acko Drive Awards 2023 - Car of the Year
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Card className='m-2' style={{ width: '22rem' }}>

                    <Card.Body>
                        <Card.Text  className='fw-bolder'>
                        TURBOCHARGED Awards 2023 - Icon of the Year
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>


        </>
    )
}

export default CardImg