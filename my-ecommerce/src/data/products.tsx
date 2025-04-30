export interface Product {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    image: string;
    category: string;
    description: string;
    isNew?: boolean;
    isSale?: boolean;
    colors: string[];
    sizes: string[];
    images: string[];
  }
  
  export const PRODUCTS: Product[] = [
    {
      id: "1",
      name: "Organic Cotton Overall",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Clothing",
      description: "Adorable organic cotton overalls with adjustable straps and multiple buttons for easy diaper changes. Perfect for everyday play and special occasions.",
      isNew: true,
      colors: ["#E9E2D8", "#D8E2DC", "#F8E1E6"],
      sizes: ["0-3m", "3-6m", "6-12m", "1-2y"],
      images: [
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80"
      ]
    },
    {
      id: "2",
      name: "Wool Knit Beanie",
      price: 24.99,
      salePrice: 19.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "Accessories",
      description: "Soft and warm wool knit beanie to keep your little one cozy during winter. Features a cute pom-pom on top and comes in various colors.",
      isSale: true,
      colors: ["#E9E2D8", "#3C3C3C", "#F8E1E6"],
      sizes: ["0-6m", "6-12m", "1-3y"],
      images: [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1599255068390-206e0d068539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      ]
    },
    {
      id: "3",
      name: "Wooden Stacking Toy",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1754&q=80",
      category: "Toys",
      description: "Beautiful wooden stacking toy made from sustainably harvested wood. Helps develop fine motor skills and color recognition in a minimalist Scandinavian design.",
      isNew: true,
      colors: ["Natural"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1754&q=80",
        "https://images.unsplash.com/photo-1598769059540-da403553a9e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      id: "4",
      name: "Linen Baby Dress",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Clothing",
      description: "Elegant linen baby dress with delicate embroidery details. Perfect for special occasions or everyday wear during summer months.",
      colors: ["#F9F7F3", "#F8E1E6", "#C8D8E4"],
      sizes: ["0-3m", "3-6m", "6-12m", "1-2y"],
      images: [
        "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1533512930330-4ac257c86793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
      ]
    },
    {
      id: "5",
      name: "Soft Knit Bunny",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1642048-a9c2250d68a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      category: "Toys",
      description: "Adorable hand-knitted bunny made from organic cotton yarn. Soft and perfect for cuddling, this lovable toy will become your child's favorite companion.",
      colors: ["#F9F7F3", "#F8E1E6", "#D8E2DC"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1642048-a9c2250d68a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
        "https://images.unsplash.com/photo-1543886151-3bc2b944c718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      ]
    },
    {
      id: "6",
      name: "Merino Wool Cardigan",
      price: 54.99,
      salePrice: 44.99,
      image: "https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "Clothing",
      description: "Luxurious merino wool cardigan that's incredibly soft and perfect for layering. Features wooden buttons and a classic Scandinavian design.",
      isSale: true,
      colors: ["#D8E2DC", "#3C3C3C", "#E9E2D8"],
      sizes: ["0-3m", "3-6m", "6-12m", "1-2y", "2-3y"],
      images: [
        "https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1501719539451-126fddec9024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
      ]
    },
    {
      id: "7",
      name: "Organic Cotton Romper",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1522771741213-5f4d0ce0bce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "Clothing",
      description: "Comfortable organic cotton romper with snap buttons for easy changing. Features a minimalist pattern and is perfect for everyday wear.",
      isNew: true,
      colors: ["#F9F7F3", "#FEF7CD", "#C8D8E4"],
      sizes: ["0-3m", "3-6m", "6-12m"],
      images: [
        "https://images.unsplash.com/photo-1522771741213-5f4d0ce0bce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      id: "8",
      name: "Natural Wooden Rattle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      category: "Toys",
      description: "Beautifully crafted wooden rattle made from untreated beech wood. Safe for babies to chew on and perfect for developing sensory skills.",
      colors: ["Natural"],
      sizes: ["One Size"],
      images: [
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
        "https://images.unsplash.com/photo-1598449356715-2c5a9b574fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1754&q=80"
      ]
    }
  ];