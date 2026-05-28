# Deploy ke Netlify (Panduan Singkat)

Pilihan cepat untuk meng-deploy situs statis Anda (`index.html` di root):

1) Drag & drop (paling cepat)

- Buka https://app.netlify.com/drop
- Tarik seluruh folder proyek (`portfolio-web`) ke area upload.
- Setelah upload selesai, situs langsung aktif di subdomain Netlify.

2) Continuous Deploy via Git (rekomendasi jika ingin update otomatis)

- Buat repository di GitHub dan push kode Anda:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

- Di Netlify, pilih "New site from Git" → connect Git provider → pilih repo → deploy settings.
- Karena ini situs statis, `Build command` dikosongkan dan `Publish directory` diisi `.` (root). Atau biarkan Netlify membaca dari `netlify.toml` yang sudah ada.

3) Menggunakan Netlify CLI (opsional)

```bash
npm install -g netlify-cli
netlify login
netlify init    # inisialisasi site pada akun Anda
netlify deploy --dir=. --prod
```

Catatan penting:
- File konfigurasi Netlify sudah ditambahkan: [netlify.toml](netlify.toml)
- Jika Anda ingin custom domain atau HTTPS otomatis, atur dari dashboard Netlify setelah site ter-deploy.
- Ingin saya bantu membuat repository GitHub dan menyiapkan continuous deploy? Balas "buat repo" dan beri nama repo yang diinginkan.
