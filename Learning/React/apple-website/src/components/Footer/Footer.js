import React from 'react';

import Links from './Links';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="center">
                <div className="top">
                    <span className='footer-text-color'>
                        1. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the eligible Mac or iPad, but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for <br />Apple Card Monthly Installment (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option) as payment type at checkout shall <br />receive a discount equal to the value of the Apple Gift Card off the price of the eligible Mac or iPad. This will result in one ACMI installment plan over 12 months for the <br />eligible iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount <br />charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be <br />charged for the Apple Gift Card in the amount of the applicable discount off the eligible Mac or iPad. ACMI is subject to credit approval and credit limit. Variable APRs for <br />Apple Card other than ACMI range from 12.49% to 23.49% based on creditworthiness. Rates as of July 1, 2022. If you choose the pay‑in‑full or one‑time‑payment option <br />for an ACMI‑eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI transactions and are subject to your standard purchase APR. See the Apple Card Customer Agreement at <a href="/" className='footer-link'>https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf</a> for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and <br />Veterans and Military Purchase Programs, or on refurbished devices. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying <br />applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for <br />Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Availability of in‑store promotion offerings may be limited by <br />Apple Store location closures as a result of COVID‑19. Additional restrictions apply. View full terms and conditions of offer <a href="/" className='footer-link'>here</a>.
                    </span>
                    <span className='footer-text-color'>
                        To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.
                    </span>
                    <span className='footer-text-color'>
                        Available for qualifying applicants in the United States.
                    </span>
                    <span className='footer-text-color'>
                        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </span>
                    <span className='footer-text-color'>
                        Learn more about how Apple Card applications are evaluated at <a className='footer-link' href="/">support.apple.com/kb/HT209218</a>.
                    </span>
                    <span className='footer-text-color'>
                        Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.
                    </span>
                </div>
                <div className="line"></div>
                <div className="links">
                    <div className="column">
                        <div className="box">
                            <span className="label">Shop and Learn</span>
                            {
                                Links.shops.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <span className="label">Services</span>
                            {
                                Links.services.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                        <div className="box">
                            <span className="label">Account</span>
                            {
                                Links.account.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <span className="label">Apple Store</span>
                            {
                                Links.apple_store.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <span className="label">For Business</span>
                            {
                                Links.for_business.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                        <div className="box">
                            <span className="label">For Education</span>
                            {
                                Links.for_education.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                        <div className="box">
                            <span className="label">For Healthcare</span>
                            {
                                Links.for_healthcare.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                        <div className="box">
                            <span className="label">For Government</span>
                            {
                                Links.for_government.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <span className="label">Apple Values</span>
                            {
                                Links.apple_values.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                        <div className="box">
                            <span className="label">About Apple</span>
                            {
                                Links.about_apple.map((link) => {
                                    return <a key={link.id} href={link.to} className='links-link'>{link.text}</a>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span className='footer-text-color first'>More ways to shop: <a href="/" className='footer-link footer-link-blue'>Find an Apple Store</a> or <a href="/" className='footer-link footer-link-blue'>other retailer</a> near you. <span className='second'>Or call 1-800-MY-APPLE.</span></span>
                    <div className="line"></div>
                    <div className="bottom2">
                        <span className='footer-text-color thirth'>Copyright © 2022 Apple Inc. All rights reserved.</span>
                        <div className='__links'>
                            <a href="/" className='footer-link'>Privacy Policy</a>
                            <div className="line2"></div>
                            <a href="/" className='footer-link'>Terms of Use</a>
                            <div className="line2"></div>
                            <a href="/" className='footer-link'>Sales and Refunds</a>
                            <div className="line2"></div>
                            <a href="/" className='footer-link'>Legal</a>
                            <div className="line2"></div>
                            <a href="/" className='footer-link'>Site Map</a>
                        </div>
                        <a href="/" className='footer-link'>United States</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;