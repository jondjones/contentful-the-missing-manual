const entries = await fetchEntries();

const fields = data.map((item) => item.fields);

fields.map((item) => {
    <>
        <>item.title</>
        <>item.body</>
    </>
});