import { products } from "@/lib/data/products";

/**
 * No-JavaScript quote form: posts to /api/teklif/, which redirects to the
 * thank-you page. Used on the home page so it costs no extra script bytes.
 */
export function MiniQuote({ product }: { product?: string }) {
  return (
    <form className="form panel" method="post" action="/api/teklif/" aria-label="Hızlı teklif formu">
      <input type="hidden" name="source" value="mini-form" />
      <label className="hp" aria-hidden="true">
        Web sitesi
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-row">
        <label className="f">
          Ürün
          <select name="product" defaultValue={product ?? ""} required>
            <option value="" disabled>
              Seçin
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Hurda palet satışı">Hurda / ikinci el palet satmak istiyorum</option>
          </select>
        </label>
        <label className="f">
          Adet
          <input type="number" name="quantity" min="1" inputMode="numeric" placeholder="ör. 200" required />
        </label>
        <label className="f">
          Teslimat ili / ilçesi
          <input type="text" name="city" placeholder="ör. Gebze" required autoComplete="address-level2" />
        </label>
      </div>
      <div className="form-row">
        <label className="f">
          Adınız
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="f">
          Telefon
          <input type="tel" name="phone" required autoComplete="tel" inputMode="tel" placeholder="05xx xxx xx xx" />
        </label>
      </div>
      <label className="check">
        <input type="checkbox" name="consent" value="1" required />
        <span>
          <a href="/kvkk/">KVKK aydınlatma metnini</a> okudum; bilgilerimin teklif amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>
      <button type="submit" className="btn btn-gold">
        Teklif İste
      </button>
    </form>
  );
}
