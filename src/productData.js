const productsData = [
    {
      id: 1,
      name: "Itel A33 Plus",
      imageURL: "p1",
      price: "280",
      category: "Phone",
      brand: "Itel",
      desc: "A33 Plus Multi-Functions Fingerprint Multi Functions Fingerprint SensorFingerprint sensor is not just for unlock. A33 plus come with multi functions fingerprint sensor which allow you to unlock apps, take photos, record videos, answer phone calls, record phone calls, stop alarm clock, even customize any of your fingerprints as unique shortcut to launch apps in a second.",
    },
    {
      id: 2,
      name: "Xioomi Redmi",
      imageURL: "p2",
      price: "300",
      category: "Phone",
      brand: "Xiaomi",
      desc: "Xioomi Redmi Multi-Functions Fingerprint Multi Functions Fingerprint SensorFingerprint sensor is not just for unlock. A33 plus come with multi functions fingerprint sensor which allow you to unlock apps, take photos, record videos, answer phone calls, record phone calls, stop alarm clock, even customize any of your fingerprints as unique shortcut to launch apps in a second.",
    },
    {
      id: 3,
      name: "Samsung Galaxy A12",
      imageURL: "p3",
      price: "500",
      category: "Phone",
      brand: "Samsung",
      desc: "Samsung Galaxy A12 mobile was launched on 24th November 2020. The phone comes with a 6.50-inch touchscreen display with a resolution of 720x1600 pixels and an aspect ratio of 20:9. Samsung Galaxy A12 is powered by a 1.8GHz octa-core MediaTek Helio P35 (MT6765) processor that features 4 cores clocked at 1.8GHz and 4 cores clocked at 2.3GHz. It comes with 4GB of RAM. The Samsung Galaxy A12 runs Android 10 and is powered by a 5000mAh battery. The Samsung Galaxy A12 supports proprietary fast charging.",
    },
    {
      id: 4,
      name: "Tecno POVA Neo",
      imageURL: "p4",
      price: "300",
      category: "Phone",
      brand: "Tecno",
      desc: "Tecno POVA Neomobile was launched on 24th November 2020. The phone comes with a 6.50-inch touchscreen display with a resolution of 720x1600 pixels and an aspect ratio of 20:9. Samsung Galaxy A12 is powered by a 1.8GHz octa-core MediaTek Helio P35 (MT6765) processor that features 4 cores clocked at 1.8GHz and 4 cores clocked at 2.3GHz. It comes with 4GB of RAM. The Samsung Galaxy A12 runs Android 10 and is powered by a 5000mAh battery. The Samsung Galaxy A12 supports proprietary fast charging. \\n More Powerful and Dynamic Game Performance with ET Engine. With its strong function, users can have a step up from their average playing experience as the engine unlocks high-refresh-rate graphics and dynamic control adjustment.",
    },
    {
      id: 5,
      name: "UMIDIGI A11 Pro Max",
      imageURL: "p5",
      price: "300",
      category: "Phone",
      brand: "Umidigi",
      desc: "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price.  ",
    },
    {
      id: 6,
      name: "Tecno Spark 7",
      imageURL: "p6",
      price: "450",
      category: "Phone",
      brand: "Tecno",
      desc: "SPARK 7 brings the perfectly proportioned forms and best-in-class functions together under one playful roof. The newly-added AI lens brightens the overall dark environment and has made it easier for you to capture every wonderful yourself and moment quickly.",
    },
    {
      id: 7,
      name: "Black Hoodie",
      imageURL: "p7",
      price: "25",
      category: "Fashion",
      brand: "Adidas",
      desc: "Hello my love ones welcome to this page, here's another one good quality and highly recommended product good in texture available material nice to put on anywhere and everywhere . Original textile come see the difference in clothing",
    },
    {
      id: 8,
      name: "Adidas ORIGINALS",
      imageURL: "p8",
      price: "300",
      category: "Fashion",
      brand: "Adidas",
      desc: "Disney's Rex peeks out from the front of this Stan Smith t-shirt. Proof that dinosaurs can be your BFF. The tee is made from 100% organic cotton jersey for a soft, comfortable feel. This product is made with organic cotton and is part of our ambition to end plastic waste.",
    },
    {
      id: 9,
      name: "Red Sweat Shirt",
      imageURL: "p9",
      price: "33",
      category: "Fashion",
      brand: "Adidas",
      desc: "Hello,  my love ones welcome to this page, here's another one good quality and highly recommended product good in texture available material nice to put on anywhere and everywhere . Original textile come see the difference in clothing's Red sweat shirt it's unique and hardly rarely seen and copy in a day to day styles made from the best quality material to fit and perfect the body or body shape with the perfect cut, best wear on corporate t-shirt, it's also worn on parties, clubs and occasional event, ",
    },
    {
      id: 10,
      name: "Amani 32''INCHES LED FULL HD",
      imageURL: "p10",
      price: "900",
      category: "Electronics",
      brand: "Amani",
      desc: "Enjoy great quality product for life with this Amani 32-inch LED TV. It has an ultra-thin bezel with a sleek finish, it delivers tremendous value in a sophisticated slim frame design, perfect for your home theatre. This flat screen LED TV features Amani True Color Technology for brilliant color and contrast. With direct-lit LED backlighting, view darker blacks and luminous brightness while maintaining the best standards in energy efficiency. An advanced refreshed technology rate allows you to watch fast-moving sports and action scenes or play games with clarity and smoothness. A variety of inputs, including HDMI and USB, turn your television into a multifunctional, multimedia entertainment system. The HDMI inputs allow you to connect to satellite or cable TV, DVD/Blu-ray player, and gaming console or watch and stream high definition video and audio from your PC computer. ",
    },
    {
      id: 11,
      name: "LG Powerful XBOOM Home Theatre",
      imageURL: "p11",
      price: "600",
      category: "Electronics",
      brand: "LG",
      desc: "Bass Blast+Advanced EQ, Bass Blast+Deeper bass and clearer vocals are made possible with Bass Blast+. It features advanced EQ for perfect, customized sound. ",
    },
    {
      id: 12,
      name: "Hisense 58''Smart UHD 4K TV",
      imageURL: "p12",
      price: "1500",
      category: "Electronics",
      brand: "Hisense",
      desc: "The ultra hd smart led tv58A7100 58 TV is manufactured by Hisense and was added around October 2020. This version of the TV comes in Screen Size : 58 Inch , Display Technology : LED , Special Features : Internet Connectivity , Special Features : Without 3D , Special Features : Smart TV , Refresh Rate : 50 HZ , Display Resolution : Ultra HD (4K).High Dynamic RangeYou’ll be refreshed by what you see  whites look brighter, blacks look darker and colors look more vibrant.",
    },
    {
      id: 13,
      name: "Hp Pavilion X360",
      imageURL: "p13",
      price: "3000",
      category: "Laptop",
      brand: "HP",
      desc: "The HP Pavilion x360 14 convertible adapts to you so that you are productive at any angle. Stream your favorite series as long as you want with HP Fast Charge2. Dual Speakers with Audio by B&O give this laptop the immersive sound and entertainment experience you crave. Designed with the environment in mind, the HP Pavilion x360 is made using sustainable, post-consumer recycled, and ocean-bound plastics4. With a perfect balance of design and performance, the HP Pavilion is an ideal laptop for streaming, staying connected, and personal productivity.",
    },
    {
      id: 14,
      name: "Hp Pavilion Laptop",
      imageURL: "p14",
      price: "1500",
      category: "Laptop",
      brand: "HP",
      desc: "Operating system : Windows 10 Home Single Language381Processor family : Intel® Pentium® Gold processorProcessor : Intel® Pentium® Gold 7505 (up to 3.5 GHz with Intel® Turbo Boost Technology, 4 MB L3 cache, 2 cores)6,71Chipset : Intel® Integrated SoCMemory : 8 GB DDR4-3200 MHz RAM (2 x 4 GB)Memory layout (slots & size) : 2 x 4 GBInternal Storage : 256 GB PCIe® NVMe™ M.2 SSDDisplay 35.6 cm",
    },
    {
      id: 15,
      name: "Lenovo IdeaPad S150",
      imageURL: "p15",
      price: "2000",
      category: "Laptop",
      brand: "Lenovo",
      desc: "Complete daily computing tasks quickly with this Lenovo IdeaPad laptop. The AMD A6-9220E processor and On-Board RAM offer ample power to run multiple applications seamlessly for efficient multitasking, while the AMD Radeon R4 integrated graphics deliver quality visuals on the 14-inch HD display. This Lenovo IdeaPad laptop has a lithium-polymer battery that provides up to 8 hours of uptime on a single charge. Connect to an HDTV or high-def monitor to set up two screens side by side or just see more of the big picture. Connect to a Wireless-AC router for nearly 3x the speed, more capacity and wider coverage than Wireless-N. Backward-compatible with all other Wi-Fi networks and hotspots.Standing screen display size 14 InchesScreen Resolution 1366x768Max Screen Resolution 1366 x 768Memory Speed 2400 MHzGraphics Coprocessor AMD Radeon R4",
    },
    // {
    //   id: 0,
    //   name: "",
    //   imageURL: "p3",
    //   price: "300",
    //   category: "",
    //   brand: "",
    //   desc: "",
    // },
  ];