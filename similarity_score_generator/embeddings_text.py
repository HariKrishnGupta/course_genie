# imports
import pandas as pd
import tiktoken

from openai.embeddings_utils import get_embedding

# embedding model parameters
embedding_model = "text-embedding-ada-002"
embedding_encoding = "cl100k_base"  # this the encoding for text-embedding-ada-002
max_tokens = 8000  # the maximum for text-embedding-ada-002 is 8191

# load & inspect dataset
input_datapath = "data/fine_food_reviews_1k.csv"  # to save space, we provide a pre-filtered dataset
df = pd.read_csv(input_datapath, index_col=0)
df = df[["Time", "ProductId", "UserId", "Score", "Summary", "Text"]]
df = df.dropna()
df["combined"] = (
    "Title: " + df.Summary.str.strip() + "; Content: " + df.Text.str.strip()
)
df.head(2)

# import openai
# openai.api_key = "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"

# # list models
# models = openai.Model.list()

# # print the first model's id
# print(models.data[0].id)

# # create a chat completion
# chat_completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Hello world"}])

# # print the chat completion
# print(chat_completion.choices[0].message.content)