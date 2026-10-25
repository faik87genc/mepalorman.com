import { products } from "@/lib/data/products";

/**
 * No-JavaScript quote form: posts to /api/teklif/, which redirects to the
 * thank-you page. The buy/sell switch is a CSS-styled radio pair.
 */
export function MiniQuote({ product, id = "mq" }: { product?: string; id?: string }) {
  return (
    <form className="form panel quote-form" method="post" action="/api/teklif/" aria-label="Hızlı teklif formu">
      <input type="hidden" name="source" value="mini-form" />
      <label className="hp" aria-hidden="true">
        Web sitesi
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <fieldset className="seg">
        <legend className="sr">Talep türü</legend>
        <input type="radio" name="type" value="buy" id={`${id}-buy`} defaultChecked />
        <label htmlFor={`${id}-buy`}>Palet almak istiyorum</label>
        <input type="radio" name="type" value="sell" id={`${id}-sell`} />
        <label htmlFor={`${id}-sell`}>Paletimi satmak istiyorum</label>
      </fieldset>
      <div className="form-row">
        <label className="f">
          Ad soyad *
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="f">
          Firma
          <input type="text" name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label className="f">
          Telefon *
          <input type="tel" name="phone" required autoComplete="tel" inputMode="tel" placeholder="05xx xxx xx xx" />
        </label>
        <label className="f">
          E-posta
          <input type="email" name="email" autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label className="f">
          Palet türü
          <select name="product" defaultValue={product ?? ""} required>
            <option value="" disabled>
              Seçin
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Hurda / ikinci el palet">Hurda / ikinci el palet</option>
          </select>
        </label>
        <label className="f">
          Yaklaşık adet
          <input type="number" name="quantity" min="1" inputMode="numeric" placeholder="ör. 200" required />
        </label>
      </div>
      <label className="f">
        İl / ilçe *
        <input type="text" name="city" placeholder="ör. Gebze" required autoComplete="address-level2" />
      </label>
      <label className="f">
        Ayrıntılar
        <textarea name="details" maxLength={600} placeholder="Ölçü, durum, teslimat veya yükleme ihtiyacı…" />
      </label>
      <label className="check">
        <input type="checkbox" name="consent" value="1" required />
        <span>
          <a href="/kvkk/">KVKK aydınlatma metnini</a> okudum; bilgilerimin teklif amacıyla işlenmesini kabul ediyorum.
        </span>
      </label>
      <button type="submit" className="btn btn-green">
        Teklif İste
      </button>
    </form>
  );
}
