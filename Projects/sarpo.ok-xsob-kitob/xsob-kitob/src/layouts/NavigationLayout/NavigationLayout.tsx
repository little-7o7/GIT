import React from 'react'
import './NavigationLayout.scss'
import Link from 'next/link'
import { Button } from '@mui/material/';
import { useAuth } from '../../contexts/Auth';

const NavigationLayout = (props: any) => {
    const { handleLogout } = useAuth();

    return (
        <div className='NavigationLayout'>
            <div className="left">
                <div className="top">
                    {/* <h1 className='img'>SARPO</h1> */}
                    <div className="links">
                        <Link href='/'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "statistic" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Statistic</Button>
                        </Link>
                        <Link href='/suppliers'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "suppliers" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Suppliers</Button>
                        </Link>
                        <Link href='/clients'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "clients" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Clients</Button>
                        </Link>
                        <Link href='/workers'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "workers" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Workers</Button>
                        </Link>
                        <Link href='/works'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "works" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Works</Button>
                        </Link>
                        <Link href='/warehouses'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "warehouses" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Warehouses</Button>
                        </Link>
                        <Link href='/rawMaterialsAndWorkPrices'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "rawMaterialsAndWorkPrices" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Prices</Button>
                        </Link>
                        <Link href='/shops'>
                            <Button
                            size="small"
                                color="inherit"
                                variant="outlined"
                                startIcon={<></>}
                                fullWidth
                                sx={props.navigation === "shops" ? { backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'white' } } : {}}
                            >Shops</Button>
                        </Link>
                    </div>
                </div>
                <Button
                size="small"
                    color="inherit"
                    variant="outlined"
                    startIcon={<></>}
                    fullWidth
                    onClick={() => handleLogout()}
                >Log out</Button>
            </div>
            <div className="right">{props.children}</div>
        </div>
    )
}

export default NavigationLayout