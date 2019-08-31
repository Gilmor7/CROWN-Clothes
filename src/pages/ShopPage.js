import React, { useState } from 'react'
import { SHOP_DATA } from '../services/shop.data'

import CollectionPreview from '../components/CollectionPreview'

const ShopPage = () => {
    const [shopData, set_shopData] = useState(SHOP_DATA);
    return (
        <div>
            {
                shopData.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage
