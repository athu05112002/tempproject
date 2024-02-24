import React from 'react'
import CoruselComponent from './CoruselComponent'


const HeaderContainer = () => {
    return (
        <div style={{
            margin: '4px',
            height: '50vh',
            borderRadius: '20px',
            backgroundImage: 'url(https://4kwallpapers.com/images/walls/thumbs_2t/3957.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '10px',
        }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    width: '25%',
                    justifyContent: 'space-between',
                    color: 'white'
                }}>
                    <li><img src='https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg' style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '4px'
                    }} /></li>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Services</li>
                    <li>ContactUs</li>
                </ul>
                <section style={{
                    width: '40%',
                }}>
                    <input type="text" style={{
                        width: '60%',
                        padding: '4px',
                        borderRadius: '4px',
                    }}
                        placeholder=' Search' />
                </section>
                <section style={{
                    marginRight: '4%',
                    display: 'flex',
                }}>
                    <img src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png" style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                    }} alt="" />

                    <div style={{
                        backgroundColor: 'white',
                        color: 'purple',
                        fontFamily: 'Helvetica Neue',
                        display: 'flex',
                        height: '40px',
                        alignItems: 'center',
                        paddingRight: '4px',
                        paddingLeft: '4px',
                        marginLeft: '4px',
                        borderRadius: '4px'
                    }}>John Doe ⌄</div>
                </section>
            </header>

            <div style={{
                height: '400px'
            }}>
                <CoruselComponent />
            </div>


            HeaderContainer
        </div>
    )
}

export default HeaderContainer