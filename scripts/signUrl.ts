import { authorize } from "../utils/authorize";

async function doStuff() {
    try {
        await authorize('https://sesamywp.dev8.qte.nu/2023/07/24/test/?se=1690562821573&sp=14&so=CHECKOUT:56b5b8de-3c3a-4825-8366-f1fa8d552af7&ss=BgEqBGSQsoa5RO38elt9C6bvOEZTOHHStBna9lOmMu62/gAxlYoKwufHarPmzENYW4m0ReQDbLcyOBbdex9VO2QfJ/RzEk7dBZVehBLFP4DWjPCa2+YdVRZVQHWmh6JddPGGLrW9ZjZyMe6Sr8N0MRECSNGBO4xT6hHf5nqfdSJTHnO3ttr5PG14DjJF+bunytAwcIqOgt0btiQyavn8BNT6I965ZpUn4ZmB4btrJJydJjWN4xnJmTkIAs6gG5G1WAxgrFqhTsWzynftNTfweWXlNE2E82Y0e3HAl/+w80VoXtcUqknFx13XUdtAibg3FYftLsQTvAY34+e2ybm3zA==', ['https://sesamywp.dev8.qte.nu/2023/07/24/test/'])
        console.log('authorized')
    } catch (err: any) {
        console.log('failed: ' + err.message)
    }
}

doStuff();