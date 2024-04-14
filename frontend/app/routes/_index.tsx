import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "EyeDentify.ai - See Beyond the Pixel" },
    { name: "description", content: "Welcome to EyeDentify.ai!" },
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen h-full bg-black text-white grid items-center">
      <div className="mx-auto w-4/5 md:w-1/2">
        <section className="hero">
          <div className="hero-content">
            <h1 className="text-4xl font-bold mb-3"><span className="text-green-500">See Beyond the Pixel:</span> Unlock the Power of AI-Driven Image Analysis with EyeDentify.ai</h1>
            <p className="text-center mt-6">Effortlessly identify objects and animals within your images. Gain data-rich insights for creators, businesses, and curious minds.</p>
            <div className="cta-buttons flex flex-col sm:flex-row items-stretch justify-center my-8 gap-6 text-center">
              <a href="#" className="try-btn p-4 w-44 rounded border border-green-500">Get Started</a>

            </div>
          </div>
          {/* <div className="hero-image">
            <img src="https://res.cloudinary.com/ddt59lbmx/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713132393/eyedentifyhero_ik9p4d.jpg" alt="EyeDentify.ai functionality demonstration" className="" />
          </div> */}
        </section>

        <footer>
          <div className="social text-center">
            <p>Follow me on</p>
            <a href="https://x.com/0xTobii" className="text-green-500">
              Twitter/X @0xTobii
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
