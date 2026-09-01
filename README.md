# Infinite Synthesis World

状態: `DOCUSAURUS BUILD READY / NOT DEPLOYED / CONTENT NOT MIGRATED`

World、Narrative、Blog、Aboutと将来のPatron導線を公開するsiteです。Target URL: `https://i-s.world/`

横断規約の正本は[ZeroRoomLab-manifest](https://github.com/saitoomituru/ZeroRoomLab-manifest)、component実装正本は各component repositoryです。本repositoryはWorld／Narrativeの公開体験、Blog、Aboutのdocs projectionです。

Patronは旦那さんとの方針決定待ちで、HIPSTAR domainへの外部導線候補です。この保留はsite bootstrapを阻害しません。MAGIは公開`main`採用。Docusaurusは実装済み（`npm ci && npm run build`が独立repositoryで再現可能）。Sakura deployは未実装（Q Atlantis #23、CIはbuild jobのみ）、content migrationは未着手（#29）です。

Docusaurus configはdocs単一instanceのみ配線した。`about/`／`blog/`plugin配線はQ Atlantis #29の承認batch通過後、`patron/`はPatron行先の方針決定後に着手する。既存のplaceholder README(`about/README.md`／`blog/README.md`／`patron/README.md`)はそのまま未配線で保持している。

code等はApache-2.0、一般文書・図・FlavorはCC BY 4.0を既定候補とします。

## local preview

```console
npm ci
npm start
```

`http://localhost:3000/` でplaceholder siteを確認できます。

## build と検査

```console
npm ci
npm run typecheck
npm run check:domain-hardcode
SITE_ID=i-s-world PUBLICATION_URL=https://i-s.world npm run build
SITE_ID=i-s-world PUBLICATION_URL=https://i-s.world npm run check:seo
SITE_ID=i-s-world npm run receipt:build
```

`SITE_ID` / `PUBLICATION_URL` は`.github/workflows/build.yml`のCI既定値と一致させる。config直書きにせず、常にenv経由で注入する。
