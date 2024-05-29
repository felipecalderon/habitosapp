export const getHabits = async () => {
    try {
        const userId = "664fb5b39f817cb454200924";
        const fetchData = await fetch(
            `http://localhost:3001/api/habit/all?userId=${userId}`,
        );
        const { message, data } = await fetchData.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
