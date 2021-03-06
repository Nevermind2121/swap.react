import React, { Fragment } from 'react'
import config from 'app-config'

import Href from 'components/Href/Href'


const LinkAccount = ({ type, children, address, contractAddress }) => (
  <Fragment>
    { type.toLowerCase() === 'eth' && <Href tab={`${config.link.etherscan}/address/${address}`} >{children}</Href> }
    { type.toLowerCase() === 'btc' && <Href tab={`${config.link.bitpay}/address/${address}`} >{children}</Href> }
    { type.toLowerCase() === 'usdt' && <Href tab={`${config.link.omniexplorer}/address/${address}`} >{children}</Href> }
    { contractAddress !== undefined && <Href tab={`${config.link.etherscan}/token/${contractAddress}?a=${address}`} >{children}</Href> }
    { type.toLowerCase() === 'eos' && <Href tab={`${config.link.eos}/#accountInfo`} >{children}</Href> }
  </Fragment>
)


export default LinkAccount
