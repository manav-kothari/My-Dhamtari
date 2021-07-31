import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard
              target="_blank"
              to={"//api.whatsapp.com/send?phone=917415519777"}
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan className="text-center">
                  Starter Plan:{" "}
                  <small>
                    <s>₹ 999/-</s>
                  </small>
                </PricingCardPlan>
                <PricingCardCost>FREE</PricingCardCost>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <span>(Limited time deal)</span>

                <PricingCardFeatures>
                  <PricingCardFeature>Shared RAM</PricingCardFeature>
                  <PricingCardFeature>512MB of storage</PricingCardFeature>
                  <PricingCardFeature>End-to-end encryption</PricingCardFeature>
                  <PricingCardFeature>
                    Many more exciting features
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact Us</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              target="_blank"
              to={"//api.whatsapp.com/send?phone=917415519777"}
            >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Plan</PricingCardPlan>
                <PricingCardCost>Pay as you go</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>Dedicated RAM</PricingCardFeature>
                  <PricingCardFeature>Storage as per need</PricingCardFeature>
                  <PricingCardFeature>End-to-end encryption</PricingCardFeature>
                  <PricingCardFeature>
                    More Features as per requirment
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact Us</Button>
              </PricingCardInfo>
            </PricingCard>
            {/* <PricingCard to="https://api.whatsapp.com/send?phone=917415519777">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> */}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
