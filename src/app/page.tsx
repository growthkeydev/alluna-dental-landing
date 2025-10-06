import { BenefitSection } from "@/components/benefit-section";
import { CertificateSection } from "@/components/certification-section";
import { CopyrightSection } from "@/components/copyright-section";
import { ExperienceSection } from "@/components/experience-section";
import { ExpertSection } from "@/components/expert-section";
import { FaqSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";
import { GetInTouchSection } from "@/components/get-in-touch-section";
import { HeroSection } from "@/components/hero-section";
import { ProfessionalWorkSection } from "@/components/professional-work-section";
import { ProtectSection } from "@/components/protect-section";
import { ServiceSection } from "@/components/service-section";
import { SmileProofSection } from "@/components/smile-proof-section";
import { TestimonalSection } from "@/components/testimonal-section";
import { TimeOfferSection } from "@/components/time-offer-section";
import { TransformationSection } from "@/components/transformation-section";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <TestimonalSection/>
      <ServiceSection/>
      <BenefitSection/>
      <TimeOfferSection/>
      <ExperienceSection/>
      <TransformationSection/>
      <ProtectSection/>
      <CertificateSection/>
      <SmileProofSection/>
      <ExpertSection/>
      <ProfessionalWorkSection/>
      <FaqSection/>
      <GetInTouchSection/>
      <FooterSection/>
      <CopyrightSection/>
    </div>
  );
}
