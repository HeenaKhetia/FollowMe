import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { IntlProvider } from "react-intl"
import { useSelector } from 'react-redux'
import * as flatten from 'flat'
// import useOnlineStatus from '@rehooks/online-status'
import Admin from './admin/Admin'
import Client from './client/Client'
import './App.scss'

function App() {
  // const onlineStatus = useOnlineStatus();
  const lang = useSelector(state => state.lang)
  const messages = {
    en: {
      "menu": {
        "login": "Login",
        "cart": "Cart",
        "electronics": "Electronics",
        "men": "Men",
        "women": "Women",
        "babykids": "Baby & Kids",
        "homefurniture": "Home & Furniture",
        "submenu": {
          "mobile": "Mobile",
          "laptopcomputer": "Laptop / Computer",
          "television": "Television",
          "accessories": "Accessories",
          "clothing": "Clothing",
          "footwear": "Footwear",
          "toys": "Toys",
          "babycare": "BabyCare",
          "kitchen": "Kitchen",
          "lighting": "Lighting",
          "furniture": "Furniture",
        },
        "innermenu": {
          "topwear": "Top Wear",
          "bottomwear": "Bottom Wear",
          "sports": "Sports",
          "casual": "Casual",
          "watches": "Watches",
          "walletbelt": "Wallets & Belts",
          "backpack": "Backpack",
          "shoes": "Shoes",
          "sandals": "Flats, Sandles & bellies",
          "handbags": "Handbags",
          "sunglasses": "Sunglasses",
          "jwellery": "Jwellery",
          "cosmetics": "Cosmetics",
          "boys": "Boy's",
          "girls": "Girl's",
          "coockware": "Coockware",
          "serveware": "Serveware",
          "bedroom": "Bed Room",
          "livingroom": "Living Room",
          "office": "Office",
        }
      },
      "footer": {
        "customerservice": "CUSTOMER SERVICE",
        "contactus": "CONTACT US",
        "policies": "POLICIES",
        "about": "ABOUT",
        "content": {
          "paymentoptions": "Payment Options",
          "trackorder": "Track Order",
          "findstore": "Find a Store",
          "returnsexchanges": "Returns & Exchanges",
          "cancellation": "Cancellation",
          "shipping": "Shipping",
          "deliveryinformation": "Delivery Information",
          "aboutus": "About Us",
          "careers": "Careers",
          "contactnumber": "9925565507"
        }
      }
    },
    hi: {
      "menu": {
        "login": "लॉग इन",
        "cart": "कार्ट",
        "electronics": "इलेक्ट्रानिक्स",
        "men": "पुरुष",
        "women": "महिला",
        "babykids": "शिशु और बच्चे",
        "homefurniture": "घर और फर्नीचर",
        "submenu": {
          "mobile": "मोबाइल",
          "laptopcomputer": "लैपटॉप / कंप्यूटर",
          "television": "टेलीविजन",
          "accessories": "एक्सेसरीज़",
          "clothing": "कपड़े",
          "footwear": "जूते",
          "toys": "खिलौने",
          "babycare": "शिशु की देख-रेख",
          "kitchen": "रसोई",
          "lighting": "लाइटिंग",
          "furniture": "फर्नीचर",
        },
        "innermenu": {
          "topwear": "टॉप वियर",
          "bottomwear": "बॉटम वियर",
          "sports": "स्पोर्ट्स",
          "casual": "कैज़ुअल",
          "watches": "घड़ियां",
          "walletbelt": "बटुए और बेल्ट",
          "backpack": "बैगपैक",
          "shoes": "शूज",
          "sandals": "फ्लैट, सैंडल और बेलियां",
          "handbags": "हैंडबैग",
          "sunglasses": "चश्मे",
          "jwellery": "आभूषण",
          "cosmetics": "प्रसाधन सामग्री",
          "boys": "लड़के",
          "girls": "लड़कियाँ",
          "coockware": "कुकवेयर",
          "serveware": "सर्ववेर",
          "bedroom": "शयनकक्ष",
          "livingroom": "बैठक कक्ष",
          "office": "कार्यालय",
        }
      },
      "footer": {
        "customerservice": "ग्राहक सेवा",
        "contactus": "संपर्क करें",
        "policies": "नीतियों",
        "about": "हमारे बारे में",
        "content": {
          "paymentoptions": "भुगतान विकल्प",
          "trackorder": "ऑर्डर पर नज़र रखें",
          "findstore": "स्टोर खोजें",
          "returnsexchanges": "रिटर्न और एक्सचेंज",
          "cancellation": "रद्द करना",
          "shipping": "शिपिंग",
          "deliveryinformation": "वितरण की जानकारी",
          "aboutus": "हमारे बारे में",
          "careers": "करियर",
          "contactnumber": "९९२५५६५५०७"
        }
      }
    },
    gu: {
      "menu": {
        "login": "પ્રવેશ કરો",
        "cart": "કાર્ટ",
        "electronics": "ઇલેક્ટ્રોનિક્સ",
        "men": "પુરુષ",
        "women": "સ્ત્રી",
        "babykids": "બાળકો",
        "homefurniture": "ઘર અને ફર્નિચર",
        "submenu": {
          "mobile": "મોબાઇલ",
          "laptopcomputer": "લેપટોપ / કમ્પ્યુટર",
          "television": "ટેલિવિઝન",
          "accessories": "એસેસરીઝ",
          "clothing": "કપડાં",
          "footwear": "પાદુકા",
          "toys": "રમકડાં",
          "babycare": "બાળકની સારસંભાળ",
          "kitchen": "રસોડું",
          "lighting": "લાઇટિંગ",
          "furniture": "ફર્નિચર",
        },
        "innermenu": {
          "topwear": "ટોપ  વેર",
          "bottomwear": "બોટમ વેર",
          "sports": "સ્પોર્ટ્સ ",
          "casual": "કેઝ્યુઅલ",
          "watches": "કાંડા ઘડિયાળ",
          "walletbelt": "બટવો અને બેલ્ટ",
          "backpack": "બેકપેક",
          "shoes": "શૂઝ",
          "sandals": "ફ્લેટ્સ, સેન્ડલ અને બેલી",
          "handbags": "હેન્ડબેગ",
          "sunglasses": "ચશમા",
          "jwellery": "આભૂષણ",
          "cosmetics": "સૌંદર્ય પ્રસાધનો",
          "boys": "છોકરાઓ",
          "girls": "છોકરીઓ",
          "coockware": "કૂકવેર",
          "serveware": "સર્વવેર",
          "bedroom": "શયનકક્ષ",
          "livingroom": "લિવિંગ રૂમ",
          "office": "કાર્યાલય",
        }
      },
      "footer": {
        "customerservice": "ગ્રાહક સેવા",
        "contactus": "અમારો સંપર્ક કરો",
        "policies": "નીતિઓ",
        "about": "અમારા વિશે",
        "content": {
          "paymentoptions": "ચુકવણી વિકલ્પો",
          "trackorder": "ટ્રેક ઓર્ડ",
          "findstore": "દુકાન શોધો",
          "returnsexchanges": "વળતર અને વિનિમય",
          "cancellation": "રદ",
          "shipping": "નૌપરિવહન",
          "deliveryinformation": "વિતરણ માહિતી",
          "aboutus": "અમારા વિશે",
          "careers": "કારકિર્દી",
          "contactnumber": "૯૯૨૫૫૬૫૫૦૭"
        }
      }
    }
  }
  return (
    <IntlProvider locale={lang} messages={flatten(messages[lang])}>
      <Router>
        <Switch>
          <Route exact path="/" component={Client} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
