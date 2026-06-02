# Template README untuk Mahasiswa

Template ini untuk dipasang di **awal `README.md`** repository tugas kamu. Sistem dosen akan auto-detect Nama, NIM, dan Kelas dari sini saat repo di-import — jadi pastikan formatnya benar.

---

## ⭐ Format yang direkomendasikan

Salin blok di bawah ke `README.md` di root repository kamu, lalu **edit nilainya** sesuai data kamu.

# Web Profile Cantikasa

## Identitas Mahasiswa
- **Nama:** Cantika Salsabrina Fiqih
- **NIM:** 5124500028
- **Kelas:** 2 D3 MMB A

## Deskripsi
Project portfolio web profile interaktif bertema Strawberry Vibe menggunakan Bootstrap dan Three.js untuk tugas kuliah di PENS.

## Cara Menjalankan
```bash
git clone [https://github.com/cantikasalsabrina/web-profile-cantikasa.git](https://github.com/cantikasalsabrina/web-profile-cantikasa.git)
cd web-profile-cantikasa
```

> Setelah dipasang, `README.md` kamu akan tampak rapi dan dosen tinggal pilih repo dari list — tanpa input manual.

---

## 📋 Format alternatif (juga didukung)

Sistem fleksibel — semua format di bawah dikenali otomatis. Pilih salah satu yang paling kamu suka.

### 1. Plain (paling simpel)

```markdown
Nama: Budi Cahyono
NIM: 2301010002
Kelas: PWL-B
```

### 2. Bold inline

```markdown
**Nama**: Citra Lestari
**NIM**: 2301010003
**Kelas**: PWL-A
```

### 3. Blockquote

```markdown
> Nama: Doni Pratama
> NIM: 2301010004
> Kelas: PWL-C
```

### 4. Tabel Markdown

```markdown
| Nama | NIM | Kelas |
|------|-----|-------|
| Eka Sari | 2301010005 | PWL-A |
```

### 5. HTML comment (tidak terlihat saat README di-render di GitHub)

```markdown
```

### 6. YAML frontmatter (untuk yang suka rapi)

```markdown
---
nama: Gita Permata
nim: 2301010007
kelas: PWL-A
---

# Project
```

---

## 🔑 Aturan key (case-insensitive)

| Key untuk | Boleh ditulis sebagai |
|-----------|----------------------|
| Nama | `Nama`, `Name`, `Mahasiswa`, `Student` |
| NIM   | `NIM`, `NRP`, `NPM` |
| Kelas | `Kelas`, `Class`, `Rombel` |

Jadi kamu boleh pakai `NRP:` atau `Class:` — sama-sama dikenali.

---

## ✅ Checklist sebelum push ke GitHub

- [x] Repo sudah punya `README.md` di root
- [x] Blok identitas (Nama / NIM / Kelas) ada di awal README
- [ ] Dosen sudah di-invite sebagai **collaborator** di Settings → Collaborators
- [ ] Invitation diterima oleh dosen (atau kamu sudah follow up)

---

## 🔧 Tips struktur Laravel yang dicek otomatis

Sistem juga mengecek struktur project Laravel kamu. Pastikan repo punya:

- ✅ `composer.json`
- ✅ `artisan`
- ✅ Folder `app/`
- ✅ `routes/web.php`
- ✅ Folder `resources/views/`
- ✅ Folder `database/migrations/`
- ✅ `.env.example` (jangan commit `.env` aslinya)
- ✅ `README.md` (yang ini)

Skor 0–100 dihitung otomatis dari kelengkapan ini.

---

_Template ini dari **Student Progress Reviewer**. Pertanyaan? Tanya dosen kamu langsung._