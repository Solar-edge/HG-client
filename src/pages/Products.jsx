import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../api.js";
import { motion } from "motion/react";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [params, setParams] = useSearchParams();
  const active = params.get("category") || "all";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.get("/categories"), api.get("/products")])
      .then(([c, p]) => {
        setCategories(c.data);
        setProducts(p.data);
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  const groups = useMemo(() => {
    return categories
      .map(category => ({
        category,
        products: products.filter(p => Number(p.categoryId) === Number(category.id))
      }))
      .filter(group => active === "all" || String(group.category.id) === active);
  }, [categories, products, active]);

  return (

    <>

      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />

      <motion.section
        className="catalogue section page-top"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.9 }}
      >
        <div className="catalogue-intro">
          <span className="eyebrow">PRODUCTS</span>
          <h1>Solar products for smarter energy.</h1>
          <p>Browse our catalogue by category and find the equipment that fits your needs.</p>
        </div>

        <div className="catalogue-tabs">
          <button className={active === "all" ? "active" : ""} onClick={() => setParams({})}>All products</button>
          {categories.map(c => (
            <button key={c.id} className={String(c.id) === active ? "active" : ""} onClick={() => setParams({ category: c.id })}>
              {c.name}
            </button>
          ))}
        </div>

        {loading ? <div className="loading">Loading products…</div> : (
          <div className="category-sections">
            {groups.map(({ category, products: items }) => (
              <section className="category-section" key={category.id}>
                <div className="category-section-heading">
                  <div><span className="eyebrow">{category.name}</span><h2>{category.description || `Products in ${category.name}`}</h2></div>
                </div>
                {items.length ? (
                  <div className="product-grid">
                    {items.map((product, index) => (<ProductCard
                      key={product.id}
                      product={product}
                      index={index} />
                    ))}
                  </div>
                ) : <p className="empty">No products have been added to this category yet.</p>}
              </section>
            ))}
            {!groups.length && <p className="empty">No categories have been added yet.</p>}
          </div>
        )}
      </motion.section>
    </>


  );
}

function ProductCard({ product, index }) {
  return (

    <motion.div
      className="product-card"
      initial={{ oapcity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
    >
      <Link to={`/products/${product.id}`}>
        <div className="product-image">
          {product.imageUrl ? <img src={product.imageUrl} alt={product.name} /> : <span>HG ENERGY</span>}
          <b className={product.availability ? "available-badge" : "unavailable-badge"}>{product.availability ? "Available" : "Out of stock"}</b>
        </div>
        <div className="product-card-body">
          <span>{product.Category?.name || "Solar Product"}</span>
          <h3>{product.name}</h3>
          <p>{product.description || "Reliable solar energy equipment."}</p>
          <strong>₦{Number(product.price).toLocaleString()}</strong>
        </div>
      </Link>
    </motion.div>

  );
}