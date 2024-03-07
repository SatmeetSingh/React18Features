import styles from "./form.module.css";
import { Button, FormControl, FormLabel, Input, Stack } from "@mui/material";
import useAPI from "../../utils/Context";

function FormData() {
  const {
    handlenameChange,
    handlePhoneNumberChange,
    handleEmailChange,
    handleuserChange,
    handleWebsiteChange,
    handleStreetChange,
    handlesuiteChange,
    handleCityChange,
    handleCodeChange,
    handlePlaceChange,
    handleCompanyname,
    handlecatchPhrase,
    handleBsChange,
    handleSubmit,
    handleClose,
    handlelocation,
  } = useAPI();
  return (
    <div className={styles.div}>
      <div className={styles.box}>
        <p
          onClick={handleClose}
          style={{
            position: "absolute",
            right: "5%",
            top: "-4%",
            cursor: "pointer",
          }}
        >
          ❌
        </p>
        <form className={styles.form}>
          <Stack spacing={2}>
            <div className={styles.gap}>
              <FormControl>
                <Stack spacing={2}>
                  <FormControl>
                    <Stack spacing={1}>
                      <FormLabel>Name</FormLabel>
                      <Input
                        placeholder="name"
                        type="text"
                        onChange={(e) => handlenameChange(e.target.value)}
                        className={styles.name}
                        required
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Username</FormLabel>
                      <Input
                        placeholder="username"
                        onChange={(e) => handleuserChange(e.target.value)}
                        className={styles.name}
                        required
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        placeholder="Email"
                        type="email"
                        onChange={(e) => handleEmailChange(e.target.value)}
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>PhoneNumber</FormLabel>
                      <Input
                        placeholder="0000000000"
                        type="number"
                        onChange={(e) =>
                          handlePhoneNumberChange(e.target.value)
                        }
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Website</FormLabel>
                      <Input
                        placeholder="https://"
                        onChange={(e) => handleWebsiteChange(e.target.value)}
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </FormControl>
              <FormControl>
                <Stack spacing={2}>
                  <FormLabel
                    sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}
                  >
                    Address
                  </FormLabel>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Street</FormLabel>
                      <Input
                        placeholder=""
                        type="text"
                        onChange={(e) => handleStreetChange(e.target.value)}
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Suite</FormLabel>
                      <Input
                        placeholder=""
                        onChange={(e) => handlesuiteChange(e.target.value)}
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>City</FormLabel>
                      <Input
                        placeholder=""
                        onChange={(e) => handleCityChange(e.target.value)}
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Zip Code</FormLabel>
                      <Input
                        placeholder=""
                        onChange={(e) => handleCodeChange(e.target.value)}
                        required
                        className={styles.name}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <Stack spacing={0.5}>
                      <FormLabel>Lat,Long</FormLabel>
                      <Input
                        placeholder=""
                        onChange={(e) => handlePlaceChange(e.target.value)}
                        className={styles.name}
                      />
                      <button className={styles.btn} onClick={handlelocation}>
                        Click
                      </button>
                    </Stack>
                  </FormControl>
                </Stack>
              </FormControl>
            </div>
            <FormControl>
              <Stack spacing={2}>
                <FormLabel sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}>
                  Company
                </FormLabel>
                <FormControl>
                  <Stack spacing={0.5}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      placeholder=""
                      onChange={(e) => handleCompanyname(e.target.value)}
                      required
                      className={styles.name}
                    />
                  </Stack>
                </FormControl>
                <FormControl>
                  <Stack spacing={0.5}>
                    <FormLabel>CatchPhrase</FormLabel>
                    <Input
                      placeholder=""
                      onChange={(e) => handlecatchPhrase(e.target.value)}
                      required
                      className={styles.name}
                    />
                  </Stack>
                </FormControl>
                <FormControl>
                  <Stack spacing={0.5}>
                    <FormLabel>Bs</FormLabel>
                    <Input
                      placeholder=""
                      onChange={(e) => handleBsChange(e.target.value)}
                      className={styles.name}
                    />
                  </Stack>
                </FormControl>
              </Stack>
            </FormControl>

            <Button size="md" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default FormData;
