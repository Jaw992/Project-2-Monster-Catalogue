export async function getData() {

    const url = "https://mhw-db.com/monsters";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  
    const json = await response.json();
    return json;
  
  } catch (error) {
    console.error(error.message);
  }
    }

    export async function getAir() {

      const url = "https://api.airtable.com/v0/appYf0toFZzaCMGae/Table%201";
      
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${import.meta.env.VITE_APIKEY}`,
          },
      });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json.records.map((record) => {
          return {
            id: record.id,
            ...record.fields,
          }
        })
      } catch (error) {
        console.error(error.message);
      }
      }

export const deleteMonster = async (favId) => {

  const url = `https://api.airtable.com/v0/appYf0toFZzaCMGae/Table%201/${favId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_APIKEY}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export const createMonster = async (names, types, specie) => {

  const url = "https://api.airtable.com/v0/appYf0toFZzaCMGae/Table%201";
  const payload = {
    fields: {
      name: names,
      type: types,
      species: specie,
    }
  }
  console.log("payload: ", payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${import.meta.env.VITE_APIKEY}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const result = {id: json.id, ...json.fields};
    return result;
  } catch (error) {
    console.error(error.message);
  }
}