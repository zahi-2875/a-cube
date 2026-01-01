import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: December 31, 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At A-Cube, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and applications.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Information We Collect
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-foreground">Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and payment information when you register for our services or events.</p>
                    <p><strong className="text-foreground">Health Information:</strong> In the course of providing therapy services, we may collect sensitive health information. This information is treated with the highest level of confidentiality in accordance with HIPAA regulations.</p>
                    <p><strong className="text-foreground">Usage Data:</strong> We automatically collect certain information about your device and usage patterns when you access our website or applications.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>To provide and maintain our therapy and mental health services</li>
                    <li>To process transactions and send related information</li>
                    <li>To send you updates about events, services, and resources</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To improve our services and develop new features</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All therapy sessions and communications are encrypted, and we follow industry best practices for data security.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Confidentiality of Therapy Sessions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All therapy sessions are strictly confidential. We do not share information about your therapy sessions with third parties except as required by law or with your explicit written consent. Our psychologists are bound by professional ethical standards and legal requirements regarding client confidentiality.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Your Rights
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate personal data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Cookies and Tracking
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Essential cookies required for the website to function cannot be disabled.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Third-Party Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use third-party services for payment processing, video conferencing, and analytics. These services have their own privacy policies, and we encourage you to review them. We only work with providers who maintain high standards of data protection.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 p-6 rounded-xl bg-card border border-border">
                    <p className="text-foreground font-medium">A-Cube Privacy Team</p>
                    <p className="text-muted-foreground">Email: privacy@a-cube.com</p>
                    <p className="text-muted-foreground">Phone: +1 (234) 567-890</p>
                    <p className="text-muted-foreground">Address: 123 Wellness Street, San Francisco, CA 94102</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
