const pageUrls = ['',''];

const stream = new SitemapStream({ hostname: baseUrl });

const xml = await streamToPromise(Readable.from(pageUrls).pipe(stream)).then((data) => {
    data.toString();
})

fs.writeFileSync('./public/sitemap.xml', xml);