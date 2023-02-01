import { DataBase } from "../DataBase";
import { TeamData } from "../TeamData";
import { PokeTeamData } from "../PokeTeamData";

const team = require("./team")
const pokeTeam = require("./pokeTeam")

class Migrations extends DataBase {

    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables with seed....")
            await this.populateTable()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            this.getConnection().destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await this.getConnection().raw(`
        CREATE TABLE ${TeamData.TABLE_TEAM} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
            );
        `),
        await this.getConnection().raw(`
        CREATE TABLE ${PokeTeamData.TABLE_POKETEAM} (
            id VARCHAR(255) PRIMARY KEY,
            poke_id VARCHAR(255) NOT NULL,
            team_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (team_id) REFERENCES Team_Db(id)
        );
        `)
        
    }

    populateTable = async () => {
        await this.getConnection()
            .from(TeamData.TABLE_TEAM)
            .insert(team)

            await this.getConnection()
            .from(PokeTeamData.TABLE_POKETEAM)
            .insert(pokeTeam)
    }
        
}

const migrations = new Migrations()
migrations.execute()