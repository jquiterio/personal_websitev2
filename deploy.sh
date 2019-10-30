npm run build
git add .
read -p "Comment: " commit_msg
if test ! -z "$commit_msg"; then
  git commit -m $commit_msg
else
  git commit -m "last_commit"
fi
git push
