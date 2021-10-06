import React from 'react'
import PriceCard from './PriceCard'
import SectionHeader from './SectionHeader'

export default function Price() {
    return (
        <div class="price">
            <div class="container">
                <SectionHeader title="Washing Plan" heading="Choose Your Plan"/>
                <div class="row">

                    <PriceCard
                        look="price-item"
                        heading="Basic Cleaning"
                        price={{ k1: "$", k2: "35", k3: ".99" }}
                        cls1="far fa-check-circle"
                        cls2="far fa-times-circle"
                        cls3="far fa-times-circle"
                    />

                    <PriceCard
                        look="price-item featured-item"
                        heading="Premium Cleaning"
                        price={{ k1: "$", k2: "35", k3: ".99" }}
                        cls1="far fa-check-circle"
                        cls2="far fa-check-circle"
                        cls3="far fa-times-circle"
                    />
                    <PriceCard
                        look="price-item"
                        heading="Complex Cleaning"
                        price={{ k1: "$", k2: "49", k3: ".99" }}
                        cls1="far fa-check-circle"
                        cls2="far fa-check-circle"
                        cls3="far fa-check-circle"

                    />
                </div>
            </div>
        </div>
    )
}
