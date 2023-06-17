import React from 'react';
import "../css/ChooseUs.css";
import McClaren from "../images/mcclaren-570s.png";



const ChooseUs = () => {
    const homeBtn = () => {
        document
        .querySelector("#home")
        .scrollIntoView({ behavior: "smooth" });
    };
  
    return (
    <>
        <section id='choose-us'> 
            <div className='chooseUs'>
                <div className='chooseUs__container'>
                    <img src={McClaren} alt='' className='chooseUs__img1' />
                </div>
                <div className='chooseUs__content'>
                    <div className='chooseUs__contentLeft'>
                        <h3>Why Choose Us</h3>
                        <h1>Best valued deals you will ever find</h1>
                        <p>Choose our supercar rental service for an unparalleled combination of exceptional vehicles 
                        from the world's top manufacturers, and a commitment to delivering a seamless, unforgettable 
                        experience, where your dreams of driving a high-performance luxury car become a thrilling reality. 
                        With our meticulous attention to detail, exceptional customer service, and transparent pricing, we 
                        strive to exceed your expectations and create memories that will last a lifetime.</p>
                        <button className='chooseUs__contentBtn' onClick={homeBtn}>Find Details </button>
                    </div>
                    <div className='chooseUs__contentRight'>
                        <div className='chooseUs__contentCell'>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABoCAMAAADB9f6QAAAC/VBMVEUAAADqXSbsZDPkYCv/7+//7en/6+f/7On/7un/7en/7er/7On/7er/7+j+7ObzsJr/7er/7ur/8Ov/7er/7er/7er/7er/7ur/7On/7ev/7+3/5+P/7ej91sv80cb//Oj4+Oj/7en/7er/7Oj/5eD/7ur/6ef/7eb+5+H+6OP/6+j/6+n/6OT95uL/5+L/7er+5+L4xrz/6eX/7Or95uD+5+T/6+j84Nf/7ef+5+P/6OL94tz/7er/7Oj/6+j+5+H/6ub+5N7+6+j/6eX+6eT+6ub+5d/+5eD+4tv/TC/83dX729H+5+P72M771Mn71cz84dv92tD70sf93tX50sX/6OP/Zy/61Mf95Nz71sr85eD93NP84Nj839f72dD8493/5uH70cT82s770cb708X50cX718z60cP+4Nn93df808f+4t3/5+P+4tr839j729P81cj+4Nr91Mr/Ti/50sf/6OL4z8P7z8L96OP91sv708n+Zy/61sn/cVj/UC/92tL/clj92M76zcD8tKL6s5/+nHn9Xy//ZS78Wi7/Sy7508j7z8X/Vi/+VS/+3dT8qZj/Xi//WS/8Vy7/5N/+3tf618z9y7/8xLT7vKr8uqX+sKH7tqD8lXr/b1f+X0P/VTr/VDD8Ti3+4Nj61sv+wLH+vK7+f139blP+YS7/6uX93NL91s380sX9uKH9pZP+mIf/g23/g1b8eFT/aE7/bjn/Yi/9x7j+knz9mnv8dFT9bUv/zsT+yL3+wrb7sZ39ooP+mn37mHr8jGf+dlv/dEP9XS77ZC38Uy3+4Nf+n439n4P+lYP/akX/Ui//2NL918z91sn7rpz8q5D8o439nX78kHn+eWT/hVn/Wy/+Vy7/VC7/5eH908j+zcD6yrv9vqr9tqj8tJ38r5b/nIn9hGf+gGX+eVn+flT9eEv+Zzn/4938qIv/mIL+jnr+iGH/Yzv/ajr8WTf/4tz+2dD+uar8mHv/iXT/d1D/b1D9ZUD/Xzv+lHL8jXL7h3D+jGOgVqpIAAAAPHRSTlMAAgQGD+y/sWjeceiAGBIP8Vkx+u65oHhgUB/zQS0mCgXQyaliSDkm1KKWiezm4tfMIvbklpFYVS/n1X2e5HlmAAARh0lEQVRo3rTUPWrDMBjG8Qy2Y9mJSWM7TkwgiYMpZPGQ9ZEJAg89T6/RE3Tp1BMUeocuOUmh0EKHTFUKgbi25A+pv0lo+fNK8A66iFNnZm2ICZhkY82cNB78ByMdhRNUBOEoNbSGPNuChGV7ukLz0EcDP5xrmG5lE7RC7JXiL0UuWnMjldluTHRiLvqW4hCdDce9UosAArpHW+/Q027d9f0S9JZ02yZTEwrcW4WUekw9pR6L91C2b/dnYwINiNdmAWbQImmxHofQZNiYcqCN05Ba+tDGn0pTYxd1GEcZK91QxkGKSBfxtqZDr7HKDYXYVvaC+ItW/Jba1pbi3Z4JZrrq5nleupLXMuHOH9UOxZM88Pl2eubpgh+LgtKvp+8jPzKGy9vWiwQpY4KSS+js8fTw8coz+aE45Dx4fLm7f8/PGGSxwBCMJUwVP5SX+09SYRjHf6mtH6p1W5df2+qvKM95OXcDxAojMjlhUqZ0UShsYZRdRlHBKCtMIQtbFy/N6wLUrbZWkeYyU8yZlbVcZStLV1vredFKlGP13c5hOwf48H2e53zflwe+b/c+wStJkyQ+MD3sK+PH0SSMzYxva8Ek1BiJ9DjCgYSWr36Goih8kIGvoYRPZZ3fSZKRgE1tbObkXmEUGAm4Bg9YKiKRVwQhl6spuYWosOd+3U4P176Au3+Bzfw3WzJgwXfRZZ0hdX3km4cTRUJrJiyiyIVGHMPq1pqarQxYw7D/MjZ3UrdWRFEM3eMsI4a6wq1EMMiJLCuyXE6QKH11pJloTym3MFFnUizQEol8j7E1hpL3fOwlypyFYr1jELEapGGRNff16ZM1Nacf1fSqKZqRgEnm/ez5cWwxDE3LiWyC5d4+5docw0NuVYs/oMsK9nd+R01HezioqJyiKVxFSdb8WVOvJbJRWxRJU4RZy3WLz5Cu7MgNPrlDEITqIK+6cxShZyzHAU1OkxQNHZN8xmZMXUIZtsXQ8JPNhMghxCJ+IHh569Zqe/UDq90b2Boo5wd4hCUStIWCpv1HEadPKiFJAgtQyI1UPG80lmaevmfvWJO4Bs6lmaW7jEZepXPrWI6wwBNHrpRJsaZP3KZNmkIZDghCFLUoSwOk1FSgVNlDmSfXnPaWJG5Yk5iaajRqdMitFQlAkVByqUmcN+XSD83CLIoQu906tOedzWazFhcXe+02q9Vm8wo2ON8G1dfpdByrpdQ0mbASBuSfNgMLJywmCcCi1RQnIqQ5JYDsWEJUuaB8kM93IuLob0E6EYpIM9KshbGsCX8VcO7QlFrdzaKsAsF7qnDHhlUtaWl6vf7MATjOKBSfP1/bkZhUMOIYyWIRBBd1FbPiw5bGsubETiHUHjKWkLOs7rNXCHmsIBuU7fXr/uMVxb9kvf0us99Rr2G1wGJIYMUf+zmxe5oJk4G7Jae0BHKr7gnvh3Dh8h/6HA5Xp7OpWBgTXPP1t4a7LiM2W22GiCGlRnGa5EZjJQiHk8Ws1Q3wJUKhVXiuUCgMl5IMOV+cDVeE94LnWN4lgyJ52y3XY78rvL+bINTREJZ4npdLBS9G4UXRYha1bv6UUDUkWJP1hiSlcu+6bQ21hzGrIGmv0qBP3h8cHAzUuy5kdcPcW65SCWRCXNzc8azFMahoZFjUIqcbUJUIPR3C8zSFQpmnXKtMj7KeCJ7VOaZ9Z/T6tMfO4aRwpwohglJTDAMwWZwtweLxrBkxqJUJDCy/2VqEVGCrUChJ07ca1u9N33t8c0PKKCs9/dl6g16hX/Wh9n6ggEeslpBbaIZh8MdHJZWIi2JQMoaEgddyiDdCt6pyK/TXLx0zmUzpGTcOY9Z7+6GM1aZj+5Kgi5s/Hq0rhQBhs7PVV69C06JFnEBbFGf9H3sPA4OhJrRIw2Nb+SX6A3nKHKUpI2PTllFWrmd3umlnTl7edUVyecqbjamngjquOxsvLzQzhhlfyZkxvmJRFAP5jnQ8j23lV+j3rVeuXbstY/eWUdaT/LY9xzPWrlu3z6BPW/UjpWm73duCODkuI03hHPhFk8XxNWPcNhcHIdg6+byyskqo6nnoe9ccVcNh0E1g5V7Jf/XkwoUvDc3N7e3tTYdTUuoe2KsrX1a+xPIEGCZKk/2BzZg88/gepC5uljnoFbAKC30+FzzBztraoylR9d2GJHQ4uuCa89e1uu1W+0XIyLuRE5GIA/aoQMPWorCJM7/kNwriiaYoc6ZX6BCq/KHEDZfPnz9fDioqKjrU2Nd3/uDZtra2xsbGvqKConK413uuty5z+3W//zJopCtUEXb5SQZoOEQwELRsPOsnHWYa40IYxnGLSBAhJEJEEOL+IBJfRFS1utOZnZnO27GzowdjZjrtYFVVmx6OrrUrrTrqaB3BOhu3OncTxFq7zriJxB1nJMIHH8QRz7uu2OXZyc7utHl//T/v8z7v/+3gXyUI5Y5RM59YD+6wXnaRDo5OiHFYxwgKI1wRrqioOLB7d239I02RFD3KsB7avZCyk9ucXlvZ1NUvVxkMgZW7TOYJf2At+0b7X4UBbzFPnmwoPmjdgVkOyk17xEBAR1JYCodDIWCdq2la2vhUC6VSetQfYKE8HI7Zdp93DkEYX66yGIpXvjeZzSDtJwyy2L5Fn8ez2WzTgFVsOWjdedF6kSQp91oxHo3KSJNCkhQGVrjixunK9SEtJKWQX0+y27Gw2WtIstxL2F6ef2Aszh8rKTGboBU3933gdW7zVwzAz0AW9oPg0TBrvvWUg5suHzhRe2IFEiRJA2EA08JaBfyhhVQVRXUmEr55+92l/bNJxxqfbc6BlZeMlnw1WHGTCafxh7AOLQ6vzXrHY1kGQ7Gl7KD1kHX+bM59Y0vN3JoFCzav0DQJ6wppkhbCv3le1QUmyt5+U5XPH8s3ZEmS9JXTb/JnuOrSYkOzMhiu+Rjas4XfgGdY1gSTCVhG40Grdcspijswd+7XxYsXP7/adGufokgAbGbKKTWkKDximPqqN7fXrz/97tj7rANo5cffV1cDawqGYUPcXASdWvioX6baXIJlEZetd9fNXvjEumWnyMQZMfchnQPWptpCoba2kEvJuULhLM8LZ/KvK0SPZ/r0Z6VHhT1QIhcSS+6VlhqNGIazOBEL697SH8JD8NQmU0lxscU267J1A0Vx8+cuZhcfqalbjBand+lqZSaTWQpxSeefnT9fleP1N2+ORw5urtm1g74UOwP1CIau3FvaYDSCsskgbBIW1rGV74WHP2UZLTbnTutdjgvPPSLmmppqM0tzcl1aQZWZTUjepyDES0j+WLVR2FhVH1hR86EucyUlxRr2UBTYRt/j2LepADPg8sB1P65n0d+ool7jMMtsxrNFeJ32I9Yjlw/NPRH40vQM3Tp/Vv6Sfr7peaawCcdZHIWq+pOvqm4ytU055mPVzcTh0ktPOSp75lt19XGizFgMMLMZJ3Fcr5asfj1g24KeUWIwGgmniwSTATbwhLgrk+Xh4+t3fuYP4jzEyiqIfL5qv78uk2RuHns7/XAsdpRyv41VH93vJQiL8XcSu/VryYIkwsHYVDLZYJxh89pJB5V6cmDuueStpa/Pvm58q+5Kr4CCrKzcWIkD7hsXV248mz+Z/LJ018mjseOehqPrH7kp6vFDB1luI4xg8w0mE2YNbFNU1ILVGyoepgtySMwpJ5dT3HSW3fxhHV/f2NhYL2XTnxRV1lRZRkgN8jrSZUlRsvkGoeJVYyx2k1kfe3fNQ9MU55gNLBtM2DSYMex1erdm9e/W3J8MBgsxxwks91qPeGJBLa/k3uaUR3XpW5qk8iF+xcV1iM9eyqEgDyusPl8vBDc+ywoVDaXrt++FfsVRDtLlJMqahWFWt/6tWUUjfjQNg5GY47I7KDCEDHPkat1pjVdP192vTcmyLiv85pqazR+WNp5EKLRPkR69rn6XVVX+ZkPpZyYieujpHOew+1w/k2gG1oiif7C6jMYscE9lc3z2HYtwzD9yNZ3+VPspvSxTVyhc0hHPZ7/ubvpUePtIFWThzKtXDbFY7PXho7HS2OEfcQ/iposgyoA1efKE8aO7/ItVNPynrjKbz74BdtmrV69uhbPIsnT6/v1VEAVQcjooMEiP6tmcIvCvqqsBVYp/muPX/Z7LNmPGVMwyjx9e1JoF15BJP+eLwDmcDvuWP6irMuLVFPR1fp/GP4CF++LOilub6hobeb+mKbqmpFQkCCgYRIwork1AEh2kfRtBTDUWz8Qtcci/WW3HYNYUywxgkZgl+qOyilQ1tC+V0ngYmX/0Fearpilz/vUzmXkAzZ6HikE6EoKCwDCe7QnavcfhcjltBG6JwBpThFltWrO6joSlDGdWwknaoea3i34hGARWeJ8k8dDnFT0oMxtW3NlUmU0iPYj8YORkJMmCrAhJgYmwdMJN7XFcKC8nZkDRzysxjeyKUf9gFbUdZC6ZPMViLPM6fRTHsZ7rfsQgpGr7ZBRSkOqPBhkhfl2PJq8Hg0kmwCsqpFiWBUH3M0wgyrL0woXL7a45eDFPAdakQW1bs4CEWW1HmUp+sMjZVIJmI6LgFwRegWQJPC+jqJ/x+4VkMileC0QDASQgHjgoeB0yKLAsu5ajFi4nXWA9puIyNHVoC6xWKCBhVt8+k/FOOcsLnYOj6YjoZ4ClI+T3+3kUZRgm7gH7AW6HYcUABl9nFOSPB+AVkU24uYWzSbvTOweW8rSZJX36Yln/Y7UbhLdKC+Et99kpd8Ij4kjigeIiDjbCsCx4p+3bIywbEUB2HH8clolEImtpzg0NirR7bZDCaWC4B4Gsf+uC4gDYMIAZy2Y5fSTpcLtpFkaPBth4/DrD7mXxBU/24lsC/xP3AD8gxvfCaR0OSBSgXC7CZlttga9zhrXDKMz6j7CuQ0HYVMLr9UGv5zh3gt4eBzmeeITGgcdk93rotXAlaPqax+Nh4TQLkuAUQcHSsm+bBYtrNSyusV1byGrF+t6uGa20DYUBWCwoTjbxwjGoCrIhilMURB0DQ6YkIamQUgIhTdriVUPbhFwIvQt7gd7YJ+hd+yR9ll3uCfad9EA7Qshgt37EnpO/8Xw5x3hy8reVw3NkqusjGzVTy2o9c8ZP9acW7bWerTpLg5ZFUQcMzJs/eYNAyk3ZNH1uXmLOUC4OC7oFxBayg3Ndd5kUu2HAdN+0aKlet56tWRqns6aVWpCmMe/MqLXqgGk2MsPGOCBvxJShKco5KtmtQpeQfdW5Fm2760eMiUmDMxwsyeJmPGpQxHGjMYpNCsJNOh+TqzKDcNLlslDB874doFpfK3QJcDGMFyzbXMOwI98PAhNQmqEZj6mFDQhpfGyOG6FJCAJxII8PzO+qKgdwHU1OletY5eqEC59Vom34XRoJ52NzHobzYEJ9Mvf9eRT6QUQRBQCTKBowCbouqo6unFxVylwgZTuXHU/T1HbPMIwkiRI/6bIN/EGSJDZQsNPtDuzEThiAbOu5pII1JoyNnUxV6IKFS8quFU/0rd1Wez0m4wHnjNf+bds94L/VVg2D4MAloLZtloRioaaTHb7ewZTrVs61JmVwW8WmC58K3PvaWo+spaq2wf3luq89jRNpq6ABBSZdqd5WpAoKXCB7LWUHJ33lReqgo2o0+ipqJOmpqB3+NpqnASlmT3lBpPQvD6Uq160CmRzH71UFXhTgo4YOTXnsihAvXl8nRIBdp99XwKlV32FaqkpcUgborj47Tq1Ghr4vfhSPxP9wSGD4OOTp0yM2rBEnAo4zPH2PqUBVJMMmOd54IL/qkCIZiqRMtoGo8JqFnAcBj+Mbx+vSVK6SMli17R/d82QrsoMPj9PpVLoW1XuiLKMzjvaXojKVRB65KrzZEzKRlp2ilBAR2WROIjPt3UhRhmylnNXDJXzvi3RF9uSJIvP8yHYXySC+97VyMC3kVCU2WK192D3d5vyFACjuAdX2x92l6K/fhX/W5bn7cra5hQZEn7Y2zz7d5Q4qFZULl/slsf8nP75vvPFGKX8AcD2/LqF6Ti0AAAAASUVORK5CYII=' alt='' />
                            <span>
                                <h2>Cross Country Drive</h2>
                                <p>Embark on a transformative journey as you traverse the vast landscapes, discover 
                                hidden gems, and embrace the freedom of cross country driving.</p>
                            </span>
                        </div>
                        <div className='chooseUs__contentCell'>
                            <img src='data:image/png;base64,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' alt='' />
                            <span>
                                <h2>All Inclusive Pricing</h2>
                                <p>Experience worry-free luxury with our all-inclusive pricing, where every aspect of your rental,
                                 from insurance to mileage, is seamlessly integrated, allowing you to focus solely on the thrill of 
                                 the ride.</p>
                            </span>
                        </div>
                        <div className='chooseUs__contentCell'>
                            <img src='data:image/png;base64,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' alt='' />
                            <span>
                                <h2>No Hidden Charges</h2>
                                <p>Rest assured with our transparent pricing policy, as we guarantee no hidden charges, ensuring 
                                that the price you see is the price you pay for your extraordinary supercar rental experienc</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ChooseUs;